import { Avatar as ShadCnAvatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


const Avatar = () => {
  return (
    <div className="flex items-center">
      <ShadCnAvatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </ShadCnAvatar>
      <ShadCnAvatar />
    </div>
  );
};

export default Avatar;
