<template>
<meta name="viewport" content="width=device-width, initial-scale=1">
<div class="fullcontainer">
	<!-- Form Upload -->
	<div class="uploadcontainer">
			<h2>Upload Content:</h2> <br>
			<input type="file" accept="video/mp4" @change="fileInput"> <br><br>
			<label for="schedule-mode">Select Schedule Option :</label>
			<select v-model="optSched">
				<option>No Schedule</option>
				<option>Based On Date And Time</option>
				<option>Based On Timetable</option>
			</select> <br> <br>
			<fieldset id="datetime" v-if="optSched == 'Based On Date And Time'">
				<label for="start-date">Select Start Date and Time (date/month/year, hour:minute) : </label>
				<input type="datetime-local" id="start-date" v-model="startDateTime"> <br> <br>
				<label for="end-date">Select End Date and Time (date/month/year, hour:minute) : </label>
				<input type="datetime-local" id="end-date" v-model="endDateTime">
			</fieldset>
			<fieldset id="tableDatetime" v-if="optSched == 'Based On Timetable'">
				<div class="inputDate">
					<label for="bdaymonth">Choose (month and year):</label>
					<input type="month" id="bdaymonth" v-model="monthYear" @change="MYChange">
				</div><br>
					<table>
						<tr>
							<th rowspan="2">Jam</th>
							<th colspan="31">Tanggal</th>
						</tr>
						<tr>
							<th>1</th>
							<th>2</th>
							<th>3</th>
							<th>4</th>
							<th>5</th>
							<th>6</th>
							<th>7</th>
							<th>8</th>
							<th>9</th>
							<th>10</th>
							<th>11</th>
							<th>12</th>
							<th>13</th>
							<th>14</th>
							<th>15</th>
							<th>16</th>
							<th>17</th>
							<th>18</th>
							<th>19</th>
							<th>20</th>
							<th>21</th>
							<th>22</th>
							<th>23</th>
							<th>24</th>
							<th>25</th>
							<th>26</th>
							<th>27</th>
							<th>28</th>
							<th>29</th>
							<th>30</th>
							<th>31</th>
						</tr>
						<tr>
							<td>09:00-10:00</td>
							<td><input type="checkbox" value="01 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="02 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="03 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="04 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="05 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="06 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="07 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="08 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="09 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="10 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="11 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="12 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="13 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="14 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="15 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="16 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="17 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="18 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="19 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="20 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="21 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="22 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="23 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="24 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="25 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="26 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="27 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="28 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 29"><input type="checkbox" value="29 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 30"><input type="checkbox" value="30 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth == 31"><input type="checkbox" value="31 02:00 03:00" v-model="dayTime" @click="timeSelect"></td>
						</tr>
						<tr>
							<td>10:00-11:00</td>
							<td><input type="checkbox" value="01 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="02 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="03 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="04 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="05 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="06 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="07 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="08 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="09 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="10 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="11 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="12 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="13 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="14 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="15 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="16 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="17 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="18 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="19 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="20 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="21 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="22 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="23 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="24 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="25 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="26 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="27 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="28 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 29"><input type="checkbox" value="29 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 30"><input type="checkbox" value="30 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth == 31"><input type="checkbox" value="31 03:00 04:00" v-model="dayTime" @click="timeSelect"></td>
						</tr>
						<tr>
							<td>11:00-12:00</td>
							<td><input type="checkbox" value="01 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="02 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="03 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="04 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="05 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="06 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="07 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="08 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="09 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="10 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="11 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="12 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="13 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="14 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="15 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="16 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="17 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="18 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="19 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="20 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="21 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="22 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="23 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="24 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="25 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="26 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="27 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="28 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 29"><input type="checkbox" value="29 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 30"><input type="checkbox" value="30 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth == 31"><input type="checkbox" value="31 04:00 05:00" v-model="dayTime" @click="timeSelect"></td>
						</tr>
						<tr>
							<td>12:00-13:00</td>
							<td><input type="checkbox" value="01 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="02 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="03 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="04 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="05 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="06 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="07 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="08 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="09 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="10 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="11 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="12 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="13 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="14 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="15 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="16 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="17 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="18 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="19 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="20 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="21 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="22 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="23 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="24 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="25 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="26 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="27 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="28 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 29"><input type="checkbox" value="29 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 30"><input type="checkbox" value="30 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth == 31"><input type="checkbox" value="31 05:00 06:00" v-model="dayTime" @click="timeSelect"></td>
						</tr>
						<tr>
							<td>13:00-14:00</td>
							<td><input type="checkbox" value="01 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="02 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="03 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="04 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="05 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="06 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="07 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="08 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="09 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="10 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="11 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="12 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="13 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="14 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="15 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="16 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="17 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="18 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="19 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="20 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="21 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="22 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="23 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="24 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="25 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="26 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="27 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="28 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 29"><input type="checkbox" value="29 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 30"><input type="checkbox" value="30 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth == 31"><input type="checkbox" value="31 06:00 07:00" v-model="dayTime" @click="timeSelect"></td>
						</tr>
						<tr>
							<td>14:00-15:00</td>
							<td><input type="checkbox" value="01 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="02 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="03 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="04 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="05 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="06 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="07 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="08 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="09 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="10 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="11 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="12 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="13 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="14 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="15 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="16 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="17 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="18 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="19 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="20 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="21 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="22 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="23 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="24 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="25 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="26 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="27 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="28 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 29"><input type="checkbox" value="29 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 30"><input type="checkbox" value="30 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth == 31"><input type="checkbox" value="31 07:00 08:00" v-model="dayTime" @click="timeSelect"></td>
						</tr>
						<tr>
							<td>15:00-16:00</td>
							<td><input type="checkbox" value="01 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="02 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="03 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="04 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="05 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="06 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="07 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="08 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="09 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="10 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="11 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="12 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="13 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="14 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="15 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="16 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="17 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="18 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="19 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="20 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="21 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="22 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="23 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="24 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="25 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="26 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="27 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="28 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 29"><input type="checkbox" value="29 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 30"><input type="checkbox" value="30 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth == 31"><input type="checkbox" value="31 08:00 09:00" v-model="dayTime" @click="timeSelect"></td>
						</tr>
						<tr>
							<td>16:00-17:00</td>
							<td><input type="checkbox" value="01 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="02 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="03 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="04 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="05 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="06 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="07 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="08 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="09 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="10 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="11 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="12 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="13 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="14 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="15 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="16 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="17 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="18 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="19 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="20 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="21 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="22 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="23 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="24 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="25 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="26 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="27 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="28 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 29"><input type="checkbox" value="29 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 30"><input type="checkbox" value="30 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth == 31"><input type="checkbox" value="31 09:00 10:00" v-model="dayTime" @click="timeSelect"></td>
						</tr>
						<tr>
							<td>17:00-18:00</td>
							<td><input type="checkbox" value="01 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="02 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="03 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="04 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="05 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="06 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="07 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="08 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="09 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="10 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="11 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="12 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="13 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="14 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="15 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="16 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="17 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="18 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="19 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="20 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="21 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="22 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="23 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="24 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="25 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="26 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="27 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="28 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 29"><input type="checkbox" value="29 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 30"><input type="checkbox" value="30 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth == 31"><input type="checkbox" value="31 10:00 11:00" v-model="dayTime" @click="timeSelect"></td>
						</tr>
						<tr>
							<td>18:00-19:00</td>
							<td><input type="checkbox" value="01 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="02 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="03 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="04 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="05 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="06 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="07 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="08 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="09 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="10 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="11 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="12 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="13 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="14 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="15 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="16 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="17 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="18 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="19 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="20 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="21 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="22 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="23 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="24 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="25 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="26 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="27 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="28 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 29"><input type="checkbox" value="29 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 30"><input type="checkbox" value="30 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth == 31"><input type="checkbox" value="31 11:00 12:00" v-model="dayTime" @click="timeSelect"></td>
						</tr>
						<tr>
							<td>19:00-20:00</td>
							<td><input type="checkbox" value="01 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="02 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="03 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="04 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="05 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="06 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="07 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="08 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="09 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="10 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="11 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="12 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="13 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="14 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="15 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="16 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="17 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="18 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="19 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="20 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="21 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="22 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="23 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="24 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="25 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="26 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="27 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="28 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 29"><input type="checkbox" value="29 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 30"><input type="checkbox" value="30 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth == 31"><input type="checkbox" value="31 12:00 13:00" v-model="dayTime" @click="timeSelect"></td>
						</tr>
						<tr>
							<td>20:00-21:00</td>
							<td><input type="checkbox" value="01 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="02 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="03 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="04 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="05 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="06 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="07 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="08 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="09 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="10 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="11 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="12 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="13 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="14 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="15 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="16 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="17 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="18 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="19 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="20 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="21 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="22 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="23 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="24 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="25 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="26 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="27 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="28 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 29"><input type="checkbox" value="29 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 30"><input type="checkbox" value="30 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth == 31"><input type="checkbox" value="31 13:00 14:00" v-model="dayTime" @click="timeSelect"></td>
						</tr>
						<tr>
							<td>21:00-22:00</td>
							<td><input type="checkbox" value="01 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="02 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="03 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="04 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="05 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="06 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="07 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="08 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="09 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="10 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="11 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="12 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="13 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="14 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="15 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="16 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="17 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="18 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="19 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="20 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="21 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="22 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="23 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="24 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="25 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="26 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="27 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td><input type="checkbox" value="28 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 29"><input type="checkbox" value="29 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth >= 30"><input type="checkbox" value="30 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
							<td v-if="daysInCurrentMonth == 31"><input type="checkbox" value="31 14:00 15:00" v-model="dayTime" @click="timeSelect"></td>
						</tr>
					</table>
			</fieldset>
			
			<br>
			<div class="submitBtn">
				<button @click="uploadClick">Upload</button>
			</div>
			<div class="progress">
				<p>Progress:
				<progress id="progress" :value="progress" max="100"></progress>
				<button @click='stateChange' class="stateBtn">
					<div class="pause" v-if="paused">Pause</div>
					<div class="resume" v-else>Play</div>
				</button>
				<button @click='cancelUpload' class="cancelBtn">
					Cancel
				</button>
				</p>
			</div>
			<br>
	</div>
	<!-- End of Form Upload -->
</div>
</template>

<script setup>
import { getStorage, uploadBytesResumable, ref as storageRefference, getDownloadURL} from 'firebase/storage';
import { ref } from 'vue';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../main'
import { v4 as uuidv4 } from 'uuid'; 

//get total days in a month
const getDaysInMonth= (year, month) =>{
	return new Date(year, month, 0).getDate();
}

let file;
let optSched = ref(null);
let isBase = ref(true)

//To get Current Date 
let currentDay;

let currentMonth;

let currentYear;

let currentHour;
let currentMinute;
let currentSecond;

// we will display the date as YYYY-MM-DD
let currentDate;

//upload requirement check
let extension;
let uploadRequirement = false;
let fileRequirement = false;

//upload progress
const uploadTask = ref(null);
const progress = ref(0);
const paused = ref(false);

//date format for option based datetime
let startDateTime = ref(null);
let endDateTime = ref(null);
let startDateTimeFormat;
let endDateTimeFormat;

//date format for option based timetable
let dayTime = ref([]);
let tempDayTime; //save temporary and hour 
let date; //save the date day from slicing tempDayTime
let startHour; //save the start hour from slicing tempDayTime
let endHour; //save the end hour from slicing tempDayTime
let startDateHour = ref([]); //save the startDateHour in list format
let endDateHour = ref([]); //save the endDateHour in list format

let monthYear = ref(); //save month and year value from input month and year
let monthChoosen = 0; //save month from slicing monthYear
let yearChoosen; //save year from slicing monthYear
let daysInCurrentMonth = ref(); //save the total of day on monthChoosen

//get total days in a month and year choosen
const MYChange= () =>{
	monthChoosen = monthYear.value.slice(5);
	yearChoosen = monthYear.value.slice(0,4)
	daysInCurrentMonth.value = getDaysInMonth(yearChoosen, monthChoosen);
	console.log(monthChoosen, yearChoosen, daysInCurrentMonth);
}

//process and checking the file input
const fileInput = (e) =>{
	file = e.target.files[0];
	extension = file.name.split(".").pop()
	console.log(extension)
	if(extension == "mp4" && file.name != null && file != null){
		fileRequirement = true;
	}else{
		fileRequirement = false;
	}
}

//proses cek serta upload file dan referensi file ke firebase
const uploadClick = () => {
	//To get Current Date 
	let dates = new Date();
	currentDay= dates.getDate();

	currentMonth = dates.getMonth()+1;

	currentYear = dates.getFullYear();

	currentHour = dates.getHours();
	currentMinute = dates.getMinutes();
	currentSecond = dates.getSeconds();

	if (currentMonth < 10){
		currentMonth = `0${currentMonth}`
	}
	if (currentDay < 10){
		currentDay= `0${currentDay}`
	}


	// we will display the date as YYYY-MM-DD
	currentDate = `${currentYear}-${currentMonth}-${currentDay}T${currentHour}:${currentMinute}:${currentSecond}Z`;
	console.log(currentDate)

	//awal dari proses cek dan validasi value untuk upload 
	console.log(monthChoosen)
	console.log(Number(monthChoosen) <= 0)
	if(fileRequirement == false){
		alert("please input file with extension .mp4");
	}else{
	if(optSched.value == null){
		alert("please select schedule option")
	}
	if(optSched.value == 'No Schedule'){
		uploadRequirement = true;
		isBase.value = true;
	}
	if(optSched.value == 'Based On Timetable'){
		if(dayTime.value.length <= 0 || Number(monthChoosen) <= 0){
			alert("please input day and time");
		}else{
			for(let i = 0; i < dayTime.value.length; i++){
				tempDayTime = dayTime.value[i];
				date = tempDayTime.slice(0,2);
				startHour = tempDayTime.slice(3,8);
				endHour = tempDayTime.slice(9, 14);
				startDateHour.value.push(yearChoosen + "-" + monthChoosen + "-" + date + "T" + startHour + "Z");
				endDateHour.value.push(yearChoosen + "-" + monthChoosen + "-" + date + "T" + endHour + "Z");
			}
			isBase.value = false;
			uploadRequirement = true;
		}
	}
	if(optSched.value == 'Based On Date And Time'){
		if(startDateTime.value == null || endDateTime.value == null){
			alert("please input startDateTime and endDateTime");
		}else{
			startDateTimeFormat = new Date(startDateTime.value);
			endDateTimeFormat = new Date(endDateTime.value);
			startDateTimeFormat = startDateTimeFormat.toISOString();
			endDateTimeFormat = endDateTimeFormat.toISOString();
			isBase.value = false;
			uploadRequirement = true;
			console.log(startDateTimeFormat);
			console.log(endDateTimeFormat);
		}
	}
	//akhir dari proses cek dan validasi value untuk upload 

	//awal dari proses upload ke firebase 
	if(uploadRequirement == true){
		paused.value = true;
		const storage = getStorage();
		const storageRef = storageRefference(storage, 'content/'+ file.name);
		console.time();
		uploadTask.value = uploadBytesResumable(storageRef, file);
		uploadTask.value.on('state_changed', (snapshot) =>{
			progress.value = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
			console.log('Upload is' + progress.value + '%done');
		},
		(error) => {
			console.log('upload unsuccessful');
		},
		() => {
			console.timeEnd();
			getDownloadURL(uploadTask.value.snapshot.ref).then((downloadURL)=>{
				console.log('file available at', downloadURL);
				try {
					const vidId = uuidv4();
					const fileRef = addDoc(collection(db, "contentData"), {
						id: vidId,
						videoPath: 'content/'+file.name,
						videoName: file.name,
						isBase: isBase.value,
					});
					if(optSched.value == 'Based On Date And Time' && isBase.value == false){
						const schedRef = addDoc(collection(db, "scheduleData"), {
							id: uuidv4(),
							createdAt: currentDate,
							videoId: vidId,
							startTime: startDateTimeFormat,
							endTime: endDateTimeFormat,
							deletedAt: null
						});
					}else if(optSched.value == 'Based On Timetable' && isBase.value == false){
						for(let i = 0; i < dayTime.value.length; i++){
							const schedRef = addDoc(collection(db, "scheduleData"), {
								id: uuidv4(),
								createdAt: currentDate,
								videoId: vidId,
								startTime: startDateHour.value[0],
								endTime: endDateHour.value[0],
								deletedAt: null
							});
							startDateHour.value.shift();
							endDateHour.value.shift();
						}
					}else if(optSched.value == 'No Schedule' && isBase.value == true){
						const schedRef = addDoc(collection(db, "scheduleData"), {
							id: uuidv4(),
							currentDate: currentDate,
							videoId: vidId,
							startTime: null,
							endTime: null,
							deletedAt: null
						});
					}
				console.log("Document written with ID: ", fileRef.id);
				} catch (e) {
					console.error("Error adding document: ", e);
				}
			})
		});uploadRequirement = false;
	}}
	//akhir dari proses upload ke firebase 
}

//change state resume and pause
const stateChange = () =>{
	if(paused.value == true){
		uploadTask.value.pause();
		paused.value = false;
	}else {
		uploadTask.value.resume();
		paused.value = true;
	}
}

//cancel upload process
const cancelUpload = () =>{
	uploadTask.value.cancel();
	progress.value = 0;
}
</script>

<style scoped>

.uploadcontainer{
	margin: 50px 20px;
	font-weight: bold;
	color: #4a4a4a;
}
.stateBtn{
	margin: 15px;
}

#datetime{
	width: 50%;
	background-color: aliceblue;
	font-weight: normal;
}

#tableDatetime{
	width: 50%;
	background-color: aliceblue;
	font-weight: normal;
}
table, th, td {
	border: 1px solid black;
	border-collapse: collapse;
}

table>tr>td{
	padding: 0.5vh;
}
</style>