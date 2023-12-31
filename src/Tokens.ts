/**
 *  @abstract
 */
export default abstract class AToken {
    abstract getDescription(): string;
}

export class TEmpty extends AToken {
    constructor() { 
        super();
    };

    getDescription(): string {
        return "Empty Token";
    }
}

export class TInvalid extends AToken {
    private range: boolean;

    constructor(isOut: boolean = false) { 
        super();
        this.range = isOut;
    };

    getDescription(): string {
        if (this.range) {
            return "Out of Range"
        }

        return "Syntax Error";
    }

}
export class TInteger extends AToken {
    private intValue: number;

    constructor(int: number) {
        super();
        this.intValue = int;
    };

    getDescription(): string {
        return `Integer               = ${this.intValue}`
    }

    getIntValue(): number {
        return this.intValue;
    }
}

export class THex extends AToken {
    private hexValue: number;

    constructor(hex: number) {
        super();
        this.hexValue = hex;
    }

    getDescription(): string {
        return `HexaDecimal          = ${this.hexValue}`
    }

    getIntValue(): number {
        return this.hexValue;
    }
}

export class TIdentifier extends AToken {
    private stringValue = "";

    constructor(stringBuffer: string) {
        super();
        this.stringValue = stringBuffer;
    };

    getDescription(): string {
        return `Identifier           = ${this.stringValue}`
    }

    getStringValue(): string {
        return this.stringValue;
    }
}

export class TDotCommand extends AToken {
    private dotCommand: string;

    constructor(commandString: string) {
        super();
        this.dotCommand = commandString;
    }

    getDescription(): string {
       return `DotCommand           = ${this.dotCommand}` 
    }

    getStringValue(): string {
        return this.dotCommand;
    }
}

export class TAddress extends AToken {
    private adress: string;

    constructor(adressString: string) {
        super();
        this.adress = adressString;
    }

    getDescription(): string {
       return `Addressing Mode      = ${this.adress}` 
    }

    getStringValue(): string {
        return this.adress;
    }
}

export class TSymbol extends AToken {
    private symbol: string;

    constructor(string: string) {
        super();
        this.symbol = string;
    }

    getDescription(): string {
       return `Symbol               = ${this.symbol}` 
    }

    getStringValue(): string {
        return this.symbol;
    }
}

export class TComment extends AToken {
    private comment: string;

    constructor(string: string) {
        super();
        this.comment = string;
    }

    getDescription(): string {
       return `Comment              = ${this.comment}` 
    }
}