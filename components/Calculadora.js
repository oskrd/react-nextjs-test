
class Calculadora extends React.Component {
    state = {
        res: ''
    }

    onDigit = (digit) => {
        const expresion = this.state.res + digit;
        this.setState({ 
                res: expresion
        });
    }

    ejecutarOperacion = () => {
        const resultados = eval(this.state.res);
        this.setState({
            res:resultados
        });
    }

    render() {

        return (
            <div>
                <div className='z-depth-2 blue accent-1 white-text center-align resultados'>
                    {this.state.res || '0'}
                </div>
                <div className='calc-container blue lighten-3 hoverable z-depth-2'>
                    {
                        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].map(digit => {
                            return (
                                <a key={digit} className="waves-effect waves-light btn-large" onClick={() => this.onDigit(digit)}>{digit}</a>
                            )
                        })
                    }
                    <div className='operadores center-align'>
                        {
                            ['+', '-', '/', '*'].map(digit => {
                                return (
                                    <a
                                        key={digit}
                                        className="waves-effect waves-light btn-large deep-orange darken-1"
                                        onClick={() => this.onDigit(digit)}
                                    >
                                        {digit}
                                    </a>
                                )
                            })
                        }
                        <a key={'C'} className="waves-effect waves-light btn-large deep-orange darken-1" onClick={() => this.setState({res:''})}>C</a>
                        <a key={'enter'} className="waves-effect waves-light btn-large deep-orange darken-1" onClick={() => this.ejecutarOperacion()}>Enter</a>
                    </div>
                </div>

                <style jsx>{
                    `
                .resultados {
                    width:300px;
                    margin:0 auto;
                    font-size:32px;
                    margin-bottom:10px;
                }
                .calc-container{
                    width:300px;
                    margin:0 auto;
                    text-align:center;
                    padding:12px;
                }
                .calc-container a{
                    margin: 5px;
                }
                .operadores{
                    border:1px solid #ccc;
                    padding:10px;
                    margin-top:20px;
                }
            `
                }
                </style>
            </div>
        )
    }
}

export default Calculadora;