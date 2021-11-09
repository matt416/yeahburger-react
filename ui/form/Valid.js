import AccessibleSvg from "ui/components/AccessibleSvg"
import ValidIcon from "public/icon/valid.svg"

export default function Valid({ show }){
  return show ? <AccessibleSvg alt="" className="mr-1.5 text-green-500" width="14" height="14"><ValidIcon /></AccessibleSvg> : false
}