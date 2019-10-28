export default (props) => (
    <div className='clase-container'>
        <h2>Clase de {props.nombre}</h2>
        {props.clase.map(item => {
            return (
                <div className='clase-list'>
                    <img src={item.foto} alt='' />
                    <p>{item.first_name} {item.last_name} </p>
                </div>
            )
        })}
        <style jsx>
            {
                `
                .clase-container {
                    perpective:500px;
                }
                .clase-list {
                    display:flex;
                }
                .clase-list img {
                    padding:3px;
                    border:1px solid #ccc;
                }
                .clase-list p{
                    font-size:12px;
                    font-weight:bold;
                    font-weight:italic;
                    margin-left:12px;
                }
                .clase-list:hover{
                    transform:translateY(10px)scale(1);
                }
                `
            }
        </style>
    </div>
)