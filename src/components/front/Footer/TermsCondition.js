import React from "react";

const TermsCondition = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto policy">
            <h1 className="policy-heading">Terms and Conditions for Food Paradise</h1>
            <br></br>
            <h3 className="policy-heading">Introduction</h3>
            <p className="privacy">
            These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
            </p>
            <p className="privacy note"><span>Note: </span>People below 13 years old are not allowed to use this Website.</p>
            <br></br>
            <h3 className="policy-heading">Restrictions</h3>
            <ul>
                <li className="privacy">publishing any Website material in any other media;</li>
                <li className="privacy">using this Website in any way that is or may be damaging to this Website;</li>
                <li className="privacy">using this Website in any way that impacts user access to this Website;</li>
                <li className="privacy">using this Website to engage in any advertising or marketing.</li>
            </ul>
            <br></br>
            <h3 className="policy-heading">Your Privacy</h3>
            <p className="privacy read">
                Please read our <a href="/policy/"><span>Privacy Policy.</span></a>
            </p>
            <p className="privacy">Your Content must be your own and must not be invading any third-party’s rights. Food Paradise reserves the right to remove any of Your Content from this Website at any time without notice.</p>
            <br></br>
            <h3 className="policy-heading">
                Variation of Terms
            </h3>
            <p className="privacy">
                Food Paradise is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.
            </p>
            <br></br>
            <h3 className="policy-heading">
                Satisfaction Policy
            </h3>
            <p className="privacy">
                If you are not satisfied with your order, please contact us with our given phone numbers and we will fix your order or refund your order.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsCondition;
