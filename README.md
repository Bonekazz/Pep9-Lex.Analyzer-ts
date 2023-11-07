# Lexycal Analyzer
    A simple lexycal analyzer for an assembler project using Finite State Machines;

## FSM Design
![FSM_model](https://github.com/Bonekazz/Lexycal-Analyzer-ts/assets/103968474/eca336e6-d342-4910-af4a-831f669f7c1e)

## Components:
### InBuffer
    - the input string handler;
    - has the ability to advance and backup the input;
    
### Tokenizer
    - gets a line of characters, given by the InBuffer, loops through each line (with the getToken() function) detecting and returning each token until the end of the input string;
