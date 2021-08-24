import { Container } from "./styles";
import entradas from "../../assets/entradas.svg";
import saidas from "../../assets/saidas.svg";
import total from "../../assets/total.svg";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="Entradas" />
                </header>
                <strong> 1000 </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saidas} alt="Saídas" />
                </header>
                <strong> 1000 </strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong> 0 </strong>
            </div>
        </Container>
    );
}