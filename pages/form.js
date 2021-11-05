import { Formik, Form, useFormikContext } from 'formik';
import { useEffect, useRef } from 'react';

import * as yup from "yup"
import Layout from 'ui/layout/Layout';

import TextField from "ui/form/TextField"
import Radio from 'ui/form/Radio';
import Fieldset from 'ui/form/Fieldset';
import Select from 'ui/form/Select';
import SubmitButton from 'ui/form/SubmitButton';
import Checkbox from 'ui/form/Checkbox';
import useForm from 'ui/form/useForm';
import FormErrors from 'ui/form/FormErrors';

import { announce } from 'ui/form/LiveAnnouncer';

const initialValues = {
  burger_type: '',
  toppings: [],
  side: '',
  drink: '',
  quantity: 1,
}

const validationSchema = yup.object({
  burger_type: yup.string().required('Please select a burger type'),
  side: yup.string().required('Please choose a side'),
  toppings: yup.array().ensure().compact(),
  drink: yup.string().required('Please choose a drink'),
}).noUnknown();

export default function OrderForm(){

  const { status, onSubmit } = useForm()

  const doSubmit = () => {
    // This will not run if validation fails

    onSubmit(async () => {
      // Form submission to api

      return new Promise( (resolve, reject) => setTimeout(() => {

        // Announce success
        announce('Your items have been added to your order')
        return resolve()
      } , 1000) )
    })
  }


  return (<Layout>
    <div className="max-w-[640px] mx-auto py-16">
      <h1 className="text-3xl font-bold mb-8">Single combo</h1>
      <Formik initialValues={ initialValues } validationSchema={ validationSchema } onSubmit={ doSubmit } validateOnBlur>
        { (props) => (
          <Form noValidate="" method="POST" action="#" acceptCharset="UTF-8" className="space-y-8">


          <FormErrors />

          <Fieldset type="radio" name="burger_type"label="Type of patty" instructions="Choose your burger type of burger patty">
            <Radio label="Beef" value="beef" />
            <Radio label="Plant" value="plant" />
          </Fieldset>

          <Fieldset type="checkbox" name="toppings" label="Burger toppings" instructions="Choose the toppings you’d like on your burger">
            <Checkbox label="Lettuce" value="lettuce" />
            <Checkbox label="Tomato" value="tomato" />
            <Checkbox label="Onion" value="onion" />
            <Checkbox label="Pickle" value="pickle" />
            <Checkbox label="Ketchup" value="ketchup" />
            <Checkbox label="Mayo" value="mayo" />
          </Fieldset>

          <Fieldset type="radio" name="drink" label="Drink" instructions="Choose 1 drink">
            <Radio label="Coke" value="coke" />
            <Radio label="Diet Coke" value="diet_coke" />
            <Radio label="Cream soda" value="cream_soda" />
            <Radio label="Dr Pepper" value="dr_pepper" />
            <Radio label="Apple Juice" value="apple_juice" />
            <Radio label="Mango Juice" value="mango_juice" />
            <Radio label="Water" value="water" />
          </Fieldset>

          <Fieldset type="radio" name="side" label="Side" instructions="Choose 1 side">
            <Radio label="Fries" value="fries"/>
            <Radio label="Onion rings" value="onion_rings"/>
            <Radio label="Poutine" value="poutine" />
            <Radio label="Salad" value="salad" />
          </Fieldset>

          <TextField name="special_requests" label="Special requests"/>

          <Select name="quantity" label="Quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </Select>

          <SubmitButton loadingLabel="Adding to order" isLoading={ status.isLoading } label="Add to order" />

        </Form>
      )}
      </Formik>
    </div>
  </Layout>
  )
}


/**

 Aria-live
 Error messaging
 Keyboard access

 How do we associate error messages to a Radioset


References:
Accessible errors for Radiosets: https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups/ (append error message inthe the legend)


 *
 */