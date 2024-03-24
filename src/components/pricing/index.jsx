import { paymentMethods } from "./data"

export const Pricing = () => {

    const renderPaymentMethods = (method) => {
            if (method.icon)  return <method.icon />
            return null
    }

    return (<section>
            <h1>Pick your Premium</h1>
            <p>Listen without limits on your phone, speaker, and other devices.</p>
            {
                renderPaymentMethods(paymentMethods[0])
            }
    </section>)
} 