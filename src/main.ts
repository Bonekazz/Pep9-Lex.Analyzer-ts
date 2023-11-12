import * as fs from 'node:fs'
import { TInvalid, TEmpty } from './Tokens';
import Tokenizer from './Tokenizer';
import InBuffer from './InBuffer';
import AToken from './Tokens';

fs.readFile('./test/teste.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    actionPerformed(data);
})

function actionPerformed(data: string): void{
    const inBuffer = new InBuffer(data);           
    const tokenizer = new Tokenizer(inBuffer);      
    let aToken: AToken;
    inBuffer.cutFirstLine();

    while (inBuffer.inputRemains()) {

        do {

            aToken = tokenizer.getToken();
            console.log(aToken.getDescription());

        } while (!(aToken instanceof TEmpty) && !(aToken instanceof TInvalid));

        inBuffer.cutFirstLine();
    }
}