import { IoMdMail } from "@react-icons/all-files/io/IoMdMail";
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";




const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    // console.log(user.photoURL);

    const handleLogOut = () => {
        logOut()
            // eslint-disable-next-line no-unused-vars
            .then(result => {
                alert('Logout Successful')

            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div className="relative">
            <div className="navbar justify-around bg-blue-700">
                <div className=" gap-5">
                    <a onClick={() => { window.location.href = 'mailto:tarikulsk4@gmail.com'; }} className="text-white flex" type="email" href="" target="_top"> <i className="p-1 " ><IoMdMail /></i> tarikulsk4@gmail.com</a>
                    <a onClick={() => { window.location.href = 'tel:+918759394668'; }} className="text-white flex" type="email" href="" target="_top"> <i className="p-1 " ></i> +91 8759394668</a>
                </div>
                <div className="grid-flow-col text-white gap-4 md:place-self-center md:justify-self-end">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    <Link className="bg-white text-black px-4 py-1 rounded" to={'/login'}>Login</Link>
                    <Link className="bg-white text-black px-4 py-1 rounded" to={'/register'}>Register</Link>

                </div>
            </div>

            <div className="bg-base-100 grid md:grid-cols-3 shadow-md px-10 py-10">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case font-bold text-4xl">My College</a>
                </div>
                <div className="flex gap-4 font-bold text-lg pt-4">
                    <ActiveLink to={'/'}>Home</ActiveLink>
                    <ActiveLink to={'/colleges'}>Colleges</ActiveLink>
                    <ActiveLink to={'/admission'}>Admission</ActiveLink>
                    <ActiveLink to={'/mycollege'}>My College</ActiveLink>
                    <ActiveLink to={'/contact'}>Contact</ActiveLink>
                </div>
                <div className="flex justify-end gap-2 ">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    {user && <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">


                                <img className='h-8 w-8' title={user.displayName} src={user.photoURL} alt="" />

                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li onClick={handleLogOut}><a>Logout</a></li>
                        </ul>
                    </div>}
                </div>
            </div>

        </div>
    );
};

export default Header;