export default function Button(props) {
  return (
    <button {...props} type='submit'>{props.children}</button>
  )
}