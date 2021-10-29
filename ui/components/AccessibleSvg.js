import React from "react"
import { useSSRSafeId as useId } from "@react-aria/ssr"
import Link from "next/link"

const mapViewBox = viewBox => {

  if (!viewBox) return {}

  const [x, y, width, height] = viewBox?.split(" ")

  return { x, y, width, height }

}

export default function AccessibleSvg({ id, children, href, width, height, viewBox, alt, className, preserveAspectRatio = "xMinYMin" }){
  const svgID = useId(id)

  // Check if the there is only 1 child, and that it's a react component
  if (!React.Children.only(children) || !React.isValidElement(children)) {
    return false;
  }

  const svgElement = children.type.call()

  if (svgElement.type !== 'svg') { return false; } // Drop any children that aren't svg

  const dimensions = mapViewBox(svgElement?.props?.viewBox) // Map viewbox string into an object

  // Remove existing title
  const svgChildren = React.Children.toArray(svgElement.props.children).filter(n => n.type !== "title")
  // Add title with alt and id
  const title = alt !== false ? <title id={ svgID } key={ svgID }>{ alt }</title> : null
  svgChildren.unshift(title)

  const svg = React.cloneElement(svgElement, { ...svgElement.props, ...{
      role: "img",
      preserveAspectRatio,
      "aria-labelledby" : alt !== false ? svgID : null,
      "aria-hidden": alt === false ? true : null,
      focusable: "false",
      width: width ? width : dimensions.width, // If there is no explicit width or height, use the viewbox
      height: height ? height : dimensions.height,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: viewBox ? viewBox : svgElement?.props?.viewBox,
      className,
    }
  }, svgChildren)

  return href ? React.createElement(Link, { href },
    React.createElement('a', { "aria-labelledby": svgID }, svg )
  ) : svg




}