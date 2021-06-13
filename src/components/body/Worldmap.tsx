import { useEffect, useRef } from "react";


interface Worldmap {

}

const Worldmap:React.FC<Worldmap> = ()=>{
    const graphRef = useRef<HTMLDivElement|null>(null)
    useEffect(() => {
        if(!graphRef.current) return;
        createChart(graphRef.current)
    }, [])
    return <div className="w-full bg-gray-100 py-10" style={{height:"680px"}}>
        <div className="w-2/3 bg-red-300 mx-auto h-full" ref={graphRef}>

        </div>
    </div>
}

export default Worldmap;

function createChart(container:HTMLDivElement){
    // const data = {};
    // const pathGenerator = d3.geoPath().projection(d3.geoMercator());
    // const svg = d3
    //   .select(container)
    //   .append('svg')
    //   .attr('width', '100%')
    //   .attr('height', '100%')
    //   .attr('style', 'background:blue')

    // const mapG = svg.append("g").attr("class","mapG")



    // const paths = mapG.selectAll('path').data(data.features);
    // paths
    //   .enter()
    //   .append('path')
    //   .attr("class","svg-country")
    //   .attr('d', (d) => pathGenerator(d))
    //   .attr('fill', (d) => "#ccc")


   
}