
const BorderLine = ({ color, width, height }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: height,
            width: width
        }}
    />
);

export default BorderLine;