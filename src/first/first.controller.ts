import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('first')
export class FirstController {

    @Get('')
    getElement() {
        return 'First';
    }
    @Post('')
    addElement(
        @Body() body,
        @Query() query
    ) {
        return {
            body, query
        }
    }
}
