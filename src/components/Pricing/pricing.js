import React from 'react'
import './pricing.css'

const Pricing = () => {
  return (
    <section id="pricePlan">
        <span className="planHadder">Pricing</span>
        <div className="pricebox">
        <div className="priceItem">
            <h2>Silver</h2>
            <p><span>$60.00</span> / project</p>
            <div class="features">
                <p>✅Intial Consultation</p>
                <p>✅5 Rest API</p>
                <p>✅Basic Security Configuration</p>
                <p>✅JPA Hybernet Configuration</p>
                <p>✅Monolithic Architacture</p>

            </div>
        </div>


        <div className="priceItem">
            <h2>Gold</h2>
            <p><span>$600.00</span> /Month</p>
            <div class="features">
                <p>✅Intial Consultation</p>
                <p>✅15 Rest API</p>
                <p>✅JWT Authentication</p>
                <p>✅Database Management</p>
                <p>✅Monolithic Architacture</p>
                <p>✅Unit and Interation Tests</p>
                <p>✅Packaging</p>
                <p>✅3 months of Mantainance and Support</p>
            </div>
        </div>


        <div className="priceItem">
            <h2>Platinum</h2>
            <p><span>$800.00</span> / month</p>
            <div class="features">
                <p>✅Intial Consultation</p>
                <p>✅Unlimited Rest API</p>
                <p>✅All freatures of other packages</p>
                <p>✅Microservice Architacture</p>
                <p>✅CI/CD Integration</p>
                <p>✅Cloud Deployment</p>
                <p>✅1 year of Mantainance and Support</p>

            </div>
        </div>
        </div>
    </section>
  )
}

export default Pricing