import bank from '../../images/icons/landmark-solid.svg'
import magnify from '../../images/icons/magnifying-glass-dollar-solid.svg'
import receipt from '../../images/icons/receipt-solid.svg'
import scale from '../../images/icons/scale-balanced-solid.svg'
import cashRegister from '../../images/icons/cash-register-solid.svg'
import file from '../../images/icons/file-lines-solid.svg'
import hospital from '../../images/icons/hospital-regular.svg'

const Services = [
    {
        id: 1,
        img: receipt,
        title: "Bookkeeping",
        desc: "We want your business to run well. An informed business owner is a smart business owner. Are you trying to hire? Do you want to grow your business? Let's get your bookeeping up to date and accurate!",
        type: "Ongoing"
    },
    {
        id: 2,
        img: cashRegister,
        title: "Payroll",
        desc: "Paying your employees on-time and correctly is vital for your business. Add in benefits, vacation, health insurance, and reimbursements, the complexity and headaches add up. Let us take one more deadline off your list.",
        type: "Ongoing"
    },
    {
        id: 3,
        img: magnify,
        title: "Personal & Sole Proprietor Tax Returns",
        desc: "Looking for someone to take the load of personal taxes off your shoulder? Look no further! We file personal and small business taxes.",
        type: "Taxes"
    }
    ,
    {
        id: 4,
        img: file,
        title: "Corporate Taxes",
        desc: "Do you dread talking to your CPA? Do you wish you didn't need to handle their questions? Let us take manage your taxes for you. We have our tax preparers we love working with, or we are happy to work with yours. Accountants love us.",
        type: "Taxes"
    }
    ,
    {
        id: 5,
        img: bank,
        title: "Business Plan Preparation",
        desc: "Applying for a bank loan? We know what the bank looks for in an application. Let us work to prepare your financial statements and application so you can get the credit your business deserves.",
        type: "Custom"
    },
    {
        id: 6,
        img: scale,
        title: "Accounting Systems Setup",
        desc: "We get it, you want to roll up your sleves and get into the books yourself! In that case, let us set up your bookkeeping system for you. We throw in some coaching as well to make sure you have all the best tips and tricks we have learned in running your own bookkeeping system.",
        type: "Custom"
    },
    {
        id: 7,
        img: hospital,
        title: "Business Health Check",
        desc: "Don't wait until you're sick to see a doctor. You are running your bookkeeping on your own but want a professional once over. We will sit down with you and give you recommendations our best tips, tricks and best-practices so save yourself time and stress.",
        type: "Custom"
    }

]

export default Services;