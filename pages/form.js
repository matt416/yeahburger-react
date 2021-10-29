import { Formik, Form } from 'formik';
// import { TextInput, SubmitButton, Hidden, Checkbox } from 'ui/components/Form'

import * as yup from "yup"
import { useState }  from 'react';
// import { checkFetchResponseStatus } from "helpers/apiHelpers"
// import StorefrontCheckout from "helpers/shopifyStorefront"

// import { ESSENTIAL_AUDIT_PRICE } from 'helpers/constants'

const initialValues = {
  website_url: '',
  first_name: '',
  last_name: '',
  email_address: '',
  phone_number: '',
  agree_terms_and_conditions: false,
  product_sku: 'essential-website-audit'
}

const validationSchema = yup.object({
  website_url: yup.string().trim().lowercase().required("Your website url is required"),
  first_name: yup.string().trim().required("Your first name is required"),
  last_name: yup.string().trim().required("Your last name is required"),
  email_address: yup.string().trim().lowercase().email('Invalid email address').required('Your email address is required'),
  phone_number: yup.string().trim(),
  agree_terms_and_conditions: yup.boolean().oneOf([true], 'Please read and agree to the terms and conditions'),
  product_sku: yup.string().required(''),
}).noUnknown();

function useCheckout(){
  const [state, setState] = useState({
    isSuccess: false,
    isLoading: false,
    isError: false
  })

  function updateState(newState){
    setState(prevState => ({
      ...prevState, ...newState
    }))
  }

  async function onSubmit (values) {
    updateState({ isLoading: true })

    const redirect_url = await StorefrontCheckout().create_checkout_and_get_redirect_url(values)

    window.location.href = redirect_url;
    updateState({ isLoading: false })
    return;

  }

  return { initialValues, fetchStatus: state, onSubmit }
}

import Field from "ui/form/Field"
import TextField from "ui/form/TextField"
export default function Form1(){
  const {
    fetchStatus,
    onSubmit
  } = useCheckout()

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form noValidate="" method="POST" action="#" acceptCharset="UTF-8" className="umami--submit--checkout">

      <TextField name="first_name" label="Text"/>

      <fieldset>
        <legend className="flex flex-col">
          Type of burger patty
        </legend>
        <div>
          <input type="radio" id="beef" value="beef" name="type" />
          <label htmlFor="beef">Beef</label>
        </div>
        <div>
          <input type="radio" id="plant" value="plant" name="type" />
          <label htmlFor="plant">Plant</label>
        </div>
      </fieldset>

      <fieldset>
        <legend className="flex flex-col">
          Choose your drink
        </legend>
        <div>
          <input type="radio" id="beef" value="beef" name="type" />
          <label htmlFor="beef">Coke</label>
        </div>
        <div>
          <input type="radio" id="plant" value="plant" name="type" />
          <label htmlFor="plant">Diet Coke</label>
        </div>
      </fieldset>
      </Form>
    </Formik>
  )
}


/**

Aria-live
Error messaging
Keyboard access

How do we associate error messages to a fieldset


References:
Accessible errors for fieldsets: https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups/ (append error message inthe the legend)


 *
 */