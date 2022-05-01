import { useFormikContext } from "formik"

export default function Submitbutton() {
  const formik = useFormikContext()
  // console.log(formik)
  return (
    <div>
       <button type='submit' disabled={!formik.isValid} >send</button>
    </div>
  )
}
