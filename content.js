/**
    This file is part of the WebDice application.

    WebDice is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    WebDice is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with WebDice.  If not, see <http://www.gnu.org/licenses/>.
**/


var content = {};

content.homepage = function(reqt, res) {
  res.sendfile('index.html');
}

module.exports = content;