import { title } from "process";

export type UploadButtonProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  accept: string;
  title:string
};
export const UploadButton = (props: UploadButtonProps) => {
  return (
    <div className="p-8">
      <div className="text-md px-[16px] mb-10 pt-[16px] pb-[8px] font-semibold">
        {props.title}
      </div>
      <label style={{ backgroundColor: "yellow", padding: "10px 70px" }} htmlFor="fileInput" className={props.className}>
        <input
          id="fileInput"
          type="file"
          accept={props.accept}
          className="hidden"
          onChange={props.onChange}
        />
        Upload
      </label>
    </div>
  );
};
