
/**
 *  @abstract
 */
export default abstract class AToken {
    abstract getDescription(): string;      // prints the token type and its value;
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
    constructor() { 
        super();
    };

    getDescription(): string {
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
        return `Integer     = ${this.intValue}`
    }
}

export class THex extends AToken {
    private hexValue: string;
    // private hexConverted: number;

    constructor(hexString: string) {
        super();
        this.hexValue = hexString;
        // this.hexConverted = Number(hexString);
    }

    getDescription(): string {
        return `HexaDecimal = ${this.hexValue}`
    }
}

export class TIdentifier extends AToken {
    private stringValue = "";

    constructor(stringBuffer: string) {
        super();
        this.stringValue = stringBuffer;
    };

    getDescription(): string {
        return `Identifier  = ${this.stringValue}`
    }
}

export class TDotCommand extends AToken {
    private dotCommand: string;

    constructor(commandString: string) {
        super();
        this.dotCommand = commandString;
    }

    getDescription(): string {
       return `DotCommand  = ${this.dotCommand}` 
    }
}

export class TAddress extends AToken {
    private adress: string;

    constructor(adressString: string) {
        super();
        this.adress = adressString;
    }

    getDescription(): string {
       return `Address    = ${this.adress}` 
    }
}