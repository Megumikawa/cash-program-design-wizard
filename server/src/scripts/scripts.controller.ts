import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import SeedDemoProgram from './seed-program-demo';

enum SeedScript {
  demo = 'demo',
}

class ResetDto {
  @ApiProperty({ example: 'fill_in_secret' })
  @IsNotEmpty()
  @IsString()
  public readonly secret: string;
  @ApiProperty({
    enum: SeedScript,
    example: Object.values(SeedScript).join(' | '),
  })
  public readonly script: string;
}

@Controller('scripts')
export class ScriptsController {
  public constructor(private seedDemoProgram: SeedDemoProgram) {}

  @ApiOperation({ summary: 'Reset database' })
  @Post('/reset')
  public async resetDb(@Body() body: ResetDto, @Res() res): Promise<string> {
    if (body.secret !== process.env.RESET_SECRET) {
      return res.status(HttpStatus.FORBIDDEN).send('Not allowed');
    }
    if (body.script == SeedScript.demo) {
      await this.seedDemoProgram.run();
    }
    return res.status(HttpStatus.ACCEPTED).send('Reset done.');
  }
}
