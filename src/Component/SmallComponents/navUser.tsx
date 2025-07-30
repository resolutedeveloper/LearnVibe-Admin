// "use client"
// import {
//     LogOutIcon,
//     MoreVerticalIcon,
//     UserCircleIcon,
// } from "lucide-react"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuGroup,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Link, useNavigate } from "react-router-dom"
// // import { useModal } from "@/context/ContaxtModal"

// export function NavUser() {
//     const { isMobile } = useSidebar()
//     const navigate = useNavigate()
//     const { SideBarName } = useModal();
//     const name = SideBarName
//     const firstLetter = name.charAt(0).toUpperCase()
//     const handleSignOut = async () => {
//         localStorage.removeItem("token")
//         localStorage.removeItem("userData")
//         localStorage.removeItem("profileData")
//         localStorage.removeItem("firstDashboardVisit")
//         navigate("/")
//     }

//     return (
//         <SidebarMenu>
//             <SidebarMenuItem>
//                 <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                         <SidebarMenuButton
//                             size="lg"
//                             className="hover:bg-[#fff0] hover:text-white active:bg-[#fff0] focus-visible:ring-0 focus-visible:ring-transparent"
//                         >
//                             <Avatar className="h-8 w-8 rounded-lg bg-[#8646f4]">
//                                 <AvatarImage src="" alt={name} />
//                                 <AvatarFallback className="rounded-lg text-white bg-[#8646f4]">
//                                     {firstLetter}
//                                 </AvatarFallback>
//                             </Avatar>
//                             <div className="grid flex-1 text-left text-sm leading-tight">
//                                 <span className="truncate font-medium">{name}</span>
//                             </div>
//                             <MoreVerticalIcon className="ml-auto size-4" />
//                         </SidebarMenuButton>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent
//                         className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
//                         side={isMobile ? "bottom" : "right"}
//                         align="end"
//                         sideOffset={4}
//                     >
//                         <DropdownMenuLabel className="p-0 font-normal">
//                             <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
//                                 <Avatar className="h-8 w-8 rounded-lg">
//                                     <AvatarImage src="" alt={name} />
//                                     <AvatarFallback className="rounded-lg">
//                                         {firstLetter}
//                                     </AvatarFallback>
//                                 </Avatar>
//                                 <div className="grid flex-1 text-left text-sm leading-tight">
//                                     <span className="truncate font-medium">{name}</span>
//                                 </div>
//                             </div>
//                         </DropdownMenuLabel>
//                         <DropdownMenuSeparator />
//                         <DropdownMenuGroup>
//                             <DropdownMenuItem asChild>
//                                 <Link to="/myProfile" className="flex items-center w-full">
//                                     <UserCircleIcon className="mr-2 h-4 w-4" />
//                                     Profile
//                                 </Link>
//                             </DropdownMenuItem>
//                         </DropdownMenuGroup>
//                         <DropdownMenuSeparator />
//                         <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
//                             <LogOutIcon className="mr-2 h-4 w-4" />
//                             Sign out
//                         </DropdownMenuItem>
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//             </SidebarMenuItem>
//         </SidebarMenu>
//     )
// }
