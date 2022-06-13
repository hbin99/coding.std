import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
const Navbar = () => {
    const menuList =['여성','Dicided','남성','신생아/유아','sale']
  return (
    <div>
      <div>
        <div className='login-button'>
            <FontAwesomeIcon icon={faUser}/>
            <div>로그인</div>
        </div>
       
      </div>
      <div className="nav-section">
        <img width={100} src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8e%2FHMC_Logo_Final.svg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AHMC_Logo_Final.svg&tbnid=CeUZdyQ0s2WGwM&vet=12ahUKEwiI6aq5wKr4AhVQx5QKHUoMCCEQMygAegUIARC4AQ..i&docid=HdefEz4nCNq1OM&w=1000&h=870&q=hmc%20logo&ved=2ahUKEwiI6aq5wKr4AhVQx5QKHUoMCCEQMygAegUIARC4AQ"/>
      </div>
      <div>
        <div>
            <ul>
                <li>여성</li>
            </ul>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Navbar
