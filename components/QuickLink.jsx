export default function QuickLink({ link }) {
    return (
        <li className='QuickLink'>
            <a className="primary-btn border-2 px-2 py-1 text-sm rounded-md border-black font-bold" href={`#${link}`}>{link}</a>
        </li>
    )
}
