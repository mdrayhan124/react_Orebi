import React from 'react'
import Container from '../components/Layouts/Container'
import BreadCrumb from '../components/Layouts/BreadCrumb'
import Flex from '../components/Layouts/Flex'
import Tittle from '../components/Layouts/Tittle'
import InputField from '../components/Layouts/InputField'
import Filter from '../components/Layouts/Filter'

const SignUp = () => {
    return (
        <Container className={"mt-[124px] font-dm"}>
            <BreadCrumb
                path={window.location.pathname}
                name={window.location.pathname.split("/")[1]}
                pathName={window.location.pathname.split("/")[1]}
            />
            <p className='w-[644px] text-[#767676] text-base mt-[127px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <div className='mt-[120px]'>
                <Tittle tittle={"Your Personal Details"} />
                <Flex className={"mt-11"}>
                    <Flex className={"flex-col"}>
                        <label for="">First Name</label>
                        <InputField inputType={"text"} placeholder={"First Name"} />
                    </Flex>
                    <Flex className={"flex-col"}>
                        <label for="">Last Name</label>
                        <InputField inputType={"text"} placeholder={"Last Name"} />
                    </Flex>
                </Flex>
                <Flex className={"mt-6"}>
                    <Flex className={"flex-col"}>
                        <label for="">Email address</label>
                        <InputField inputType={"email"} placeholder={"company@domain.com"} />
                    </Flex>
                    <Flex className={"flex-col"}>
                        <label for="">Telephone</label>
                        <InputField inputType={"tel"} placeholder={"Your phone number"} />
                    </Flex>
                </Flex>
            </div>
            <div className='mt-[128px]'>
                <Tittle tittle={"New Customer"}/>
                <Flex className={"mt-10"}>
                    <Flex className={"flex-col"}>
                        <label for="">Address 1</label>
                        <InputField inputType={"text"} placeholder={"4279 Zboncak Port Suite 6212"} />
                    </Flex>
                    <Flex className={"flex-col"}>
                        <label for="">Address 2</label>
                        <InputField inputType={"text"} placeholder={"-"} />
                    </Flex>
                </Flex>
                <Flex className={"mt-6"}>
                    <Flex className={"flex-col"}>
                        <label for="">City</label>
                        <InputField inputType={"text"} placeholder={"Your city"} />
                    </Flex>
                    <Flex className={"flex-col"}>
                        <label for="">Post Code</label>
                        <InputField inputType={"number"} placeholder={"05228"} />
                    </Flex>
                </Flex>
                <Flex className={"mt-6"}>
                    <Flex className={"flex-col pr-2"}>
                        <label for="">Division</label>
                        <Filter className={"capitalize w-[500px] outline-none"}>
                            <option value={""}>dhaka</option>
                            <option value={""}>barisal</option>
                            <option value={""}>maymahansingho</option>
                            <option value={""}>shiylet</option>
                            <option value={""}>rongpur</option>
                        </Filter>
                    </Flex>
                    <Flex className={"flex-col pr-2"}>
                        <label for="">Division</label>
                        <Filter className={"capitalize w-[500px] outline-none"}>
                            <option value={""}>dhaka</option>
                            <option value={""}>barisal</option>
                            <option value={""}>maymahansingho</option>
                            <option value={""}>shiylet</option>
                            <option value={""}>rongpur</option>
                        </Filter>
                    </Flex>
                </Flex>
            </div>
            <div className='mt-[124px]'>
            <Tittle tittle={"New Customer"}/>
            <Flex className={"mt-10"}>
                    <Flex className={"flex-col"}>
                        <label for="">Password</label>
                        <InputField inputType={"password"} placeholder={"Password"} />
                    </Flex>
                    <Flex className={"flex-col"}>
                        <label for="">Repeat Password</label>
                        <InputField inputType={"password"} placeholder={"Repeat password"} />
                    </Flex>
                </Flex>
            
            </div>
        </Container>
    )
}

export default SignUp