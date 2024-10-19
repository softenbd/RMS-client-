

const InputError = ({ errorText }: { errorText: string | undefined}) => {
  return <small className="text-[#ff003c] font-bold tracking-widest left-1 -mt-8  absolute bottom-0">{errorText}</small>;
};

export default InputError;
