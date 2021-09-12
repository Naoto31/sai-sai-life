import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import { path } from 'd3'
interface Worldmap {}

const Worldmap: React.FC<Worldmap> = () => {
  const graphRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const getDataAndRenderChart = async () => {
      const data = await fetch(
        'https://piwodlaiwo.github.io/topojson//world-continents.json'
      ).then((res) => res?.json())
      const continents = topojson.feature(data, data.objects.continent).features

      if (!graphRef.current) return
      createChart(graphRef.current, continents)
    }

    getDataAndRenderChart()
  }, [])
  return (
    <div className='w-full py-10 bg-white' style={{ height: '680px' }}>
      <div className='w-2/3 h-full mx-auto ' ref={graphRef}></div>
    </div>
  )
}

export default Worldmap

function createChart(container: HTMLDivElement, data: any) {
  d3.select('.svgCont').remove()
  const svg = d3
    .select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('class', 'svgCont')

  const projection = d3.geoMercator().center([0, 60]).scale(130)

  const pathGenerator = d3.geoPath().projection(projection)

  const mapG = svg.append('g').attr('class', 'mapG')

  const paths = mapG
    .selectAll('path')
    .data(data)
    .join('path')
    .attr('class', 'continent')
    .attr('d', (d: any) => pathGenerator(d))
    .attr('fill', (d) => '#ccc')

  const tooltip = document.getElementById('tooltip')
  const title = tooltip?.querySelector('#title') as HTMLParagraphElement
  const imgContainer = tooltip?.querySelector('#img') as HTMLDivElement
  imgContainer.setAttribute('style', 'width:100%;height:100%;object-fit:cover')
  paths.on('mouseenter', (d) => {
    const path = d.target as SVGPathElement
    path.setAttribute('fill', 'lightblue')
  })
  paths.on('mouseout', (d) => {
    const path = d.target as SVGPathElement
    path.setAttribute('fill', '#ccc')
    tooltip?.setAttribute('style', 'opacity:0')
  })

  paths.on('mousemove', (event: MouseEvent, d: any) => {
    const x = event.pageX
    const y = event.pageY

    tooltip?.setAttribute('style', `opacity:1;top:${y + 10}px;left:${x + 10}px`)

    title.innerText = d.properties['continent']
    imgContainer.innerHTML = `<img src='./images/${d.properties['continent']}.jpg'/>`
  })
}
