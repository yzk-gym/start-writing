const dom = <div>
<PhotoText image="pic1" label="南国の浜辺でゆったり" />
<PhotoText image="pic2" label="南国の海は開放的" />
<PhotoText image="pic3" label="海、海、海、青い海" />
</div>

ReactDOM.render(dom, document.getElementById('root'))

function PhotoText (props) {
const url = "images/" + props.image + ".jpg"
const label = props.label
const boxStyle = {
    border: "1px solid silver",
    margin: "8px",
    padding: "4px"
}
return <div style={boxStyle}>
    <img src={url} width="128"/>
    <span> {label} </span>
</div>
}
