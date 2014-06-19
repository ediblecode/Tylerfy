using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Tylerfy
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //routes.MapRoute(
            //    name: "Default",
            //    url: "{controller}/{action}/{id}",
            //    defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            //);

            routes.MapRoute(
                name: "Home",
                url: "",
                defaults: new { controller = "Home", action = "Index" }
            );

            routes.MapRoute(
                name: "Images",
                url: "g/{width}/{height}",
                defaults: new { controller = "Image", action = "Index" },
                constraints: new { width = @"^\d+$", height = @"^\d+$" }
            );

            routes.MapRoute(
                name: "ImageSimpleFilters",
                url: "g/{width}/{height}/{alpha}/{grayscale}",
                defaults: new { controller = "Image", action = "SimpleFilters" },
                constraints: new { width = @"^\d+$", height = @"^\d+$", alpha = @"^\d+$", grayscale = @"^\d+$" }
            );
        }
    }
}