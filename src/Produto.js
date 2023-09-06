import './styles.css'

export default function Produto({ id, titulo, description, price, image }) {
    return (
        <div className="produto">
            <h2>{titulo}</h2>
            <p className="descricao text-center"> {description}</p>
            <div className="price">
                <p className="preco-com-quadrado">$ {price}</p>
            </div>
            <img className="image" src={image} />
        </div>
    );
}