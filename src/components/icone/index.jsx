export default function Icone(props) {
    // eslint-disable-next-line react/prop-types
    const { setVisible, visible } = props;
    return (
        <div
            className={`flex flex-col fixed top-0 right-0 z-40 p-5`}
            onClick={ () => setVisible(!visible) }
        >
            <div className={`${visible && 'rotate-90 translate-y-2'} h-1 w-8 mb-1 bg-rose-500 transition duration-500`} />
            <div className={`${visible && 'rotate-_45'} h-1 w-8 mb-1 bg-rose-500 transition duration-500`} />
            <div className={`${visible ? 'hidden' : 'flex'} h-1 w-8 mb-1 bg-rose-500 transition duration-500`} />
        </div>
    )
}