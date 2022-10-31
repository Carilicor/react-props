export default function Welcome(props) {
    //const name = props.name 
    //const { name } = props
    const { name, greeting } = props
    return (
        <h2>{greeting} {name}.</h2>
    )
}