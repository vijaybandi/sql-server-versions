﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SqlServerVersions.Models
{
    public class Build
    {
        public int Major { get; set; }
        public int Minor { get; set; }
        public int Build { get; set; }
        public int Revision { get; set; }
    }
}