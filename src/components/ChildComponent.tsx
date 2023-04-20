
interface PropsType {
  myLastName: string
  myAge?: number
}


// type PropsType = {
//   myLastName: string
// }

const ChildComponent = (props: PropsType) => {
  return (
    <div>ChildComponent {props.myLastName}</div>
  )
}

export default ChildComponent