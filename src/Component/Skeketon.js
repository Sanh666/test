const Skeleton = ({ item }) => {
    return (
        [...Array(item).keys()].map((index) => (
            <div key={index} className="element-to-animate">
                <div className="al"></div>
            </div>
        ))
    );
}

export default Skeleton;
