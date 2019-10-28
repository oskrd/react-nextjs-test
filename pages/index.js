import ClaseComponent from '../components/ClaseComponent';
import Header from '../components/comunes/Header';
import { matematicas, fisica} from '../data/estudiantes';
import BarraTitulo from '../components/comunes/BarraTitulo';

export default () => (
    <div>
        <Header/>
        <BarraTitulo/>
        <h1 style={{textAlign:"center"}}>Cursos del Plan</h1>
        <div style={{display:'flex', justifyContent:"space-around"}}>
            <ClaseComponent nombre = "Mate" clase={matematicas}/>
            <ClaseComponent nombre = "Fisica" clase={fisica} />
        </div>
        <style jsx global>
        {
            `
                body {
                    background:#CEF6EC
                }
            `
        }    
        </style>
    </div>
)

