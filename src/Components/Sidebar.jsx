import React from "react";
import { IconButton, List, ListItem, ListItemPrefix, Drawer, Card, } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, } from "@heroicons/react/24/outline";
import { GoHomeFill } from "react-icons/go";
import { PiMusicNote } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { RiNewspaperLine } from "react-icons/ri";
import { GoTrophy } from "react-icons/go";
import { FaYoutube } from "react-icons/fa6";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubestudio } from "react-icons/si";
import { SlSettings } from "react-icons/sl";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFlag } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { Link } from "react-router-dom";


export default function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-7 w-7 stroke-1" />
        ) : (
          <Bars3Icon className="h-7 w-7 stroke-1" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className="w-[80%] lg:w-[20%] scroll-smooth overflow-y-hidden hover:overflow-y-scroll overflow-x-hidden bg-white">
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] px-2 w-[80%]"
        >
          <div className="flex items-center justify-start fixed w-[18%] top-0 bg-white">

            <IconButton variant="text" size="lg" onClick={closeDrawer} className="ml-3">
              <Bars3Icon className="h-7 w-7 stroke-1" />
            </IconButton>
            <img className='w-24 cursor-pointer pl-3' src="/yt.svg" alt="Youtube" />
          </div>

          <List className="text-[#0f0f0f] mt-12 font-normal text-[14px]">

            {/* Box 1 */}
            <div>
              <Link to='/' >
              <ListItem>
                <ListItemPrefix>
                  <GoHomeFill size={'24px'} />
                </ListItemPrefix>
                Home
              </ListItem>
              </Link>

              <ListItem>
                <ListItemPrefix>
                <img src="/short.svg" className='w-[24px]' alt="" />
                </ListItemPrefix>
                Shorts
              </ListItem>

              <ListItem>
                <ListItemPrefix>
                <img src="/subs.svg" className='w-[24px]' alt="" />
                </ListItemPrefix>
                Subscriptions
              </ListItem>
            </div>
            <hr />

            {/* {Box 2 - Explore} */}
            <ListItem className="font-semibold text-black cursor-auto hover:bg-transparent">
              Explore
            </ListItem>

            <div>
              <ListItem>
                <ListItemPrefix>
                  <img src="/trend.svg" alt="" />
                </ListItemPrefix>
                Trending
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <PiMusicNote size={'24px'} />
                </ListItemPrefix>
                Music
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <SiYoutubegaming size={'24px'} />
                </ListItemPrefix>
                Gaming
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <RiNewspaperLine size={'24px'} />
                </ListItemPrefix>
                News
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <GoTrophy size={'24px'} />
                </ListItemPrefix>
                Sports
              </ListItem>
            </div>
            <hr />

            {/* { Box 3 - More from YouTube} */}
            <ListItem className="font-semibold text-black cursor-auto hover:bg-transparent">
              More from YouTube
            </ListItem>

            <div>
              <ListItem>
                <ListItemPrefix>
                  <FaYoutube className="text-[#FF0000]" size={'24px'} />
                </ListItemPrefix>
                YouTube Premium
              </ListItem>

              <ListItem>
                <ListItemPrefix>
                  <SiYoutubestudio className="text-[#FF0000]" size={'24px'} />
                </ListItemPrefix>
                YouTube Studio
              </ListItem>

              <ListItem>
                <ListItemPrefix>
                  <SiYoutubemusic className="text-[#FF0000]" size={'24px'} />
                </ListItemPrefix>
                YouTube Music
              </ListItem>

              <ListItem>
                <ListItemPrefix>
                  <SiYoutubekids className="text-[#FF0000]" size={'24px'} />
                </ListItemPrefix>
                YouTube Kids
              </ListItem>
            </div>
            <hr />

            {/* Box 4 */}
            <div>
              <ListItem>
                <ListItemPrefix>
                  <SlSettings size={'24px'} />
                </ListItemPrefix>
                Settings
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <MdOutlineFlag size={'24px'} />
                </ListItemPrefix>
                Report history
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <IoHelpCircleOutline size={'24px'} />
                </ListItemPrefix>
                Help
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <MdOutlineFeedback size={'24px'} />
                </ListItemPrefix>
                Send feedback
              </ListItem>
            </div>
            <hr />

            {/* Box 5 */}
            <div>
              <ListItem className="font-medium text-[13px] text-[#606060]">
                <span>About &nbsp; Press &nbsp; Copyright <br /> Contact us  &nbsp; Creators <br /> Advertise &nbsp; Developers</span>
              </ListItem>

              <ListItem className="font-medium text-[13px] text-[#606060]">
                <p className="-mt-[12px]">Terms &nbsp; Privacy Policy & Safety <br /> How YouTube works <br />Test new features</p>
              </ListItem>

              <ListItem>
                <span className="text-[#909090] text-[12px] cursor-auto">© 2024 Google LLC</span>
              </ListItem>
            </div>

          </List>
        </Card>
      </Drawer >
    </>
  );
}