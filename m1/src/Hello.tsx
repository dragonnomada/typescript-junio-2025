/**
 * Propiedades del componente Hello
 * 
 * @property {string} title - El título que se mostrará en el encabezado.
 * @property {Date} date - La fecha que se mostrará debajo del título.
 */
export interface HelloProps {

    /**
     * Título del componente
     */
    title: string
    
    /**
     * Fecha que se mostrará
     */
    date: Date

}

/**
 * Componente que muestra un título y una fecha formateada.
 * 
 * @param {HelloProps} props - Las propiedades del componente.
 * @returns {JSX.Element} Elemento JSX con título y fecha.
 */
export default function Hello({
    title,
    date
}: HelloProps) {

    return (
        <div>
            <h1>{title}</h1>
            <span>{date.toLocaleString()}</span>
        </div>
    )

}