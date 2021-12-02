import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  SecurityContext,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Clipboard } from '@capacitor/clipboard';
import { TranslateService } from '@ngx-translate/core';
import { MarkdownService } from 'ngx-markdown';
import { Subscription } from 'rxjs';
import {
  AnswerSet,
  createAnswersSet,
  getLatestAnswerDate,
  getOptionChoiceAnswer,
} from 'src/app/helpers/answers.helpers';
import { StateService } from 'src/app/services/state.service';
import { QuestionType } from 'src/app/types/question-input.type';

@Component({
  selector: 'app-report-narrative',
  templateUrl: './report-narrative.component.html',
  styleUrls: ['./report-narrative.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReportNarrativeComponent implements OnInit, OnDestroy {
  @ViewChild('reportOutput', { static: true })
  public reportOutput: ElementRef;

  public rawReport: string;
  public report: string;

  public lastUpdate: string | Date;

  private reportTemplate: string;
  private answers: AnswerSet[];

  private missingExplanation: string;
  private answerPrefix: string;

  private translation1Updates: Subscription;
  private translation2Updates: Subscription;
  private programUpdates: Subscription;
  private sectionUpdates: Subscription;

  constructor(
    private state: StateService,
    private translate: TranslateService,
    private markdownService: MarkdownService,
    private domSanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    // All these operations will not run/finish in order, so each tries to render the template
    this.translation1Updates = this.translate
      .get('report-narrative.missing-explanation')
      .subscribe((label) => {
        this.missingExplanation = label;
        this.renderTemplate();
      });
    this.translation2Updates = this.translate
      .get('report-narrative.answer-prefix')
      .subscribe((label) => {
        this.answerPrefix = label;
        this.renderTemplate();
      });
    this.programUpdates = this.state.programMetaData$.subscribe((program) => {
      this.reportTemplate = program.narrativeReportTemplate;
      this.renderTemplate();
    });
    this.sectionUpdates = this.state.sections$.subscribe((sections) => {
      if (!sections.length) {
        return;
      }
      this.answers = createAnswersSet(sections);
      this.lastUpdate = getLatestAnswerDate(this.answers);
      this.renderTemplate();
    });
  }

  ngOnDestroy() {
    this.translation1Updates.unsubscribe();
    this.translation2Updates.unsubscribe();
    this.programUpdates.unsubscribe();
    this.sectionUpdates.unsubscribe();
  }

  public print() {
    window.print();
  }

  public async copy2Clipboard(source: string) {
    const reportText = this.stripHtml(source);
    await Clipboard.write({
      // eslint-disable-next-line id-blacklist
      string: reportText,
    });
  }

  private stripHtml(source: string): string {
    const output = document.createElement('output');
    output.innerHTML = source;
    return output.innerText || '';
  }

  private renderTemplate() {
    // Only continue if everything is available
    if (
      !this.reportTemplate ||
      !this.answers ||
      !this.missingExplanation ||
      !this.answerPrefix
    ) {
      return;
    }

    this.rawReport = this.parseTemplate(this.reportTemplate);
    const markedReport = this.markdownService.compile(this.rawReport);
    this.report = this.domSanitizer.sanitize(
      SecurityContext.HTML,
      markedReport,
    );
  }

  private parseTemplate(template: string) {
    return template.replace(/{{([^{]+)}}/gi, (_token, variable) => {
      const answer = this.getAnswerByName(variable);

      if (!answer || !answer.length) {
        return `<em class="variable variable--empty" title="${this.missingExplanation}"> <code>${variable}</code> </em>`;
      }

      if (Array.isArray(answer)) {
        const listOptions = answer.map(
          (option) =>
            `<li><strong class="variable variable--filled">${option}</strong></li>`,
        );
        return `<ul title="${this.answerPrefix} ${variable}">
          ${listOptions.join('')}
        </ul>`;
      }

      return `<strong class="variable variable--filled" title="${this.answerPrefix} ${variable}">${answer}</strong>`;
    });
  }

  private getAnswerByName(name: string): string | string[] {
    const answer = this.answers.find((a) => a.name === name);
    if (!answer) {
      return '';
    }

    if (
      answer.question.type === QuestionType.selectN &&
      Array.isArray(answer.answer)
    ) {
      const answerOptions = answer.answer.map((answerOption) =>
        getOptionChoiceAnswer(answer.question, answerOption),
      );
      return answerOptions;
    }

    if (answer.question.type === QuestionType.select1) {
      return getOptionChoiceAnswer(answer.question, answer.answer);
    }

    return answer.answer.toString();
  }
}
