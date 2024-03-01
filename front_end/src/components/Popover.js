import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Avatar,
    Button,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    
  } from "@material-tailwind/react";
   
  export default function PopoverUser() {
    return (
     <Popover placement="bottom-end">
        <PopoverHandler>
          <Button>Contact Us</Button>
        </PopoverHandler>
        <PopoverContent className="w-72">
          <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
            <Avatar src="https://docs.material-tailwind.com/img/team-4.jpg" alt="tania andrew" />
            <div>
              <Typography variant="h6" color="blue-gray">
                Tania Andrew
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="font-medium text-blue-gray-500"
              >
                General Manager
              </Typography>
            </div>
          </div>
          <List className="p-0">
            <a href="#" className="text-initial font-medium text-blue-gray-500">
              <ListItem>
                <ListItemPrefix className=" pr-4">
                  <svg
                    width="15"
                    height="14"
                    viewBox="5 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                     
                      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      fill="#90A4AE"
                    />
                  </svg>
                </ListItemPrefix>
                Profile
              </ListItem>
            </a>
            <a href="#" className="text-initial font-medium text-blue-gray-500">
              <ListItem>
                <ListItemPrefix>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z"
                      fill="#90A4AE"
                    />
                  </svg>
                </ListItemPrefix>
                00 123 456 789
              </ListItem>
            </a>
            <a href="#" className="text-initial font-medium text-blue-gray-500">
              <ListItem>
                <ListItemPrefix className=" pr-4">
                <svg
                    width="12"
                    height="15"
                    viewBox="8 5 15 15"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                      fill="#90A4AE"
                    />
                  </svg>
                </ListItemPrefix>
                LogOut
              </ListItem>
            </a>
          </List>
        </PopoverContent>
      </Popover>
    );
  }