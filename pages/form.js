import { Formik, Form, useFormikContext } from 'formik';
import { useEffect, useRef } from 'react';
import * as yup from "yup"
import Image from 'next/image';

import Layout from 'ui/layout/Layout';
import Header from "ui/templates/Header"

import TextField from "ui/form/TextField"
import Radio from 'ui/form/Radio';
import Fieldset from 'ui/form/Fieldset';
import Select from 'ui/form/Select';
import SubmitButton from 'ui/form/SubmitButton';
import Checkbox from 'ui/form/Checkbox';
import useForm from 'ui/form/useForm';
import ErrorSummary from 'ui/form/ErrorSummary';

import { announce } from 'ui/form/LiveAnnouncer';

const initialValues = {
  burger_type: '',
  toppings: [],
  side: '',
  drink: '',
  quantity: 1,
}

const validationSchema = yup.object({
  burger_type: yup.string().required('Please choose your burger patty'),
  toppings: yup.array().ensure().compact(),
  side: yup.string().required('Please choose your side'),
  drink: yup.string().required('Please choose your drink'),
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

  <Header/>
  <main id="maincontent" tabIndex="-1" className="">
    <div className="w-full max-w-[48rem] mx-auto py-16 grid grid-cols-1 sm:grid-cols-5 gap-12">
      <div className="col-span-2">
        <Image src="/img/beef-burger@3x.png" layout="responsive" width="320" height="314" alt="" className="max-w-full rounded-xl" />
      </div>
      <div className="col-span-3">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
          <Image src="/img/single-burger@3x.png" width="32" height="32" alt="" />
        <span className="ml-3">Single combo</span>

        </h1>
      <Formik initialValues={ initialValues } validationSchema={ validationSchema } onSubmit={ doSubmit }>
        { (props) => (
          <Form noValidate={ true } method="POST" action="#" acceptCharset="UTF-8" className="space-y-8">

          <ErrorSummary />

          <Fieldset type="radio" name="burger_type" label="Type of patty" instructions="Choose your burger patty" required>
            <Radio label="Beef" value="beef" />
            <Radio label="Plant" value="plant" />
          </Fieldset>

          <Fieldset type="checkbox" name="toppings" label="Burger toppings" instructions="Choose your toppings">
            <Checkbox label="Lettuce" value="lettuce" />
            <Checkbox label="Tomato" value="tomato" />
            <Checkbox label="Onion" value="onion" />
            <Checkbox label="Pickle" value="pickle" />
            <Checkbox label="Ketchup" value="ketchup" />
            <Checkbox label="Mayo" value="mayo" />
          </Fieldset>

          <Fieldset type="radio" name="drink" label="Drink" instructions="Choose your drink" required>
            <Radio label="Coke" value="coke" />
            <Radio label="Diet Coke" value="diet_coke" />
            <Radio label="Cream soda" value="cream_soda" />
            <Radio label="Dr Pepper" value="dr_pepper" />
            <Radio label="Apple Juice" value="apple_juice" />
            <Radio label="Mango Juice" value="mango_juice" />
            <Radio label="Water" value="water" />
          </Fieldset>

          <Fieldset type="radio" name="side" label="Side" instructions="Choose your side" required>
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
    </div>
    </main>
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