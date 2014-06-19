using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Tylerfy.Controllers
{
    public class ImageController : Controller
    {
        //
        // GET: /Image/

        public ContentResult Index(int width, int height)
        {

            return Content(width + " " + height);
        }

    }
}
