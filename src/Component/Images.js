import './Image.css'
const Image = ({ data }) => {
    return (
        <>
            <a className="grid-item" href={data.urls.regular} target='_blank' rel='noreferrer'>
                <img src={data.urls.small} alt={data.alt_description} />
            </a>
        </>
    )
}
export default Image;