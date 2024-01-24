import './Button.scss';

export const Button = ({children, onClick}) => {
  return (
    <button className='button' onClick={onClick}>{children}</button>
  )
}
