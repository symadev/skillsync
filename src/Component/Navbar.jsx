import logo from '../assets/images/resume.icon.png'

const Navbar = () => {
    return (
        <div className="navbar bg-black text-white px-4 sticky top-0 z-50 flex items-center justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <div className="flex items-center gap-2 flex-1">
                        <img className="w-10 h-10 object-cover" src={logo} alt="Logo" />
                        <span className="text-xl font-bold">Skillsync</span>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Features</a></li>
                        <li> <a>Ai Tools</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>Contacts</a></li>

                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Features</a></li>
                    <li> <a>Ai Tools</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>Contacts</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-error">Login</a>
            </div>
        </div>
    );
};

export default Navbar;