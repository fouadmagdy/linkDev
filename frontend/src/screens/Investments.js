import React from 'react'

import './Investments.scss'

import inv1 from '../images/inv1.png'
import inv2 from '../images/inv2.png'
import inv3 from '../images/inv3.png'
import inv4 from '../images/inv4.png'
import inv5 from '../images/inv5.png'
import inv6 from '../images/inv6.png'
import inv7 from '../images/inv7.png'
import InvestimentCard from '../components/InvestimentCard'

const Investments = () => {
    return (
        <div className="investments">
            <div className="container">
                <div className="col-12 text-center pt-4 text-white">
                    <h2 className="font-weight-bold mb-3">How we have helped</h2>
                    <p className="h3">See how Al Foundation have promoted change locally and to the world</p>
                </div>

                <div className="position-relative transform-invest-card-minus d-none d-lg-block">
                    <div className="d-flex">
                        <InvestimentCard title="Find Place" image={inv2} />
                        <InvestimentCard title="Toufla" image={inv1} visHidden />
                        <InvestimentCard title="" image={inv1} visHidden />
                        <InvestimentCard title="" image={inv1} visHidden />
                    </div>

                    <div className="d-flex">
                        <InvestimentCard title="Toufla" image={inv7} />
                        <InvestimentCard title="A'waen" image={inv4} />
                        <InvestimentCard title="" image={inv1} visHidden />
                        <InvestimentCard title="" image={inv1} visHidden />
                    </div>

                    <div className="d-flex">
                        <InvestimentCard title="" image={inv1} visHidden />
                        <InvestimentCard title="Fundraising" image={inv5} />
                        <InvestimentCard title="Omniyat" image={inv6} />
                        <InvestimentCard title="" image={inv1} visHidden />
                    </div>

                    <div className="d-flex">
                        <InvestimentCard title="" image={inv1} visHidden />
                        <InvestimentCard title="" image={inv1} visHidden />
                        <InvestimentCard title="Zakat" image={inv1} />
                        <InvestimentCard title="Give Time" image={inv3} />
                    </div>
                </div>

                <div className="d-lg-none">
                    <div className="d-flex flex-column align-items-center">
                        <InvestimentCard title="Find Place" image={inv1} />
                        <InvestimentCard title="Toufla" image={inv1} />
                        <InvestimentCard title="A'waen" image={inv1} />
                        <InvestimentCard title="Fundraising" image={inv1} />
                        <InvestimentCard title="Omniyat" image={inv1} />
                        <InvestimentCard title="Zakat" image={inv1} />
                        <InvestimentCard title="Give Time" image={inv1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Investments
