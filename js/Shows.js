const Shows = function render() {
	return `<section class="section filter">
	<div class="container">
		<form>
			<label for="movieType" class="movieTypeLabel">مسلسلات</label>
			<select id="movieType" class="movieTypeSelect">
				<option>نوع الفيلم</option>
				<option>دراما</option>
				<option>أكشن</option>
				<option>الغموض</option>
				<option>كوميديا</option>
			</select>
		</form>
	</div>
</section>
<section class="section movies slider has-arrows is-suggested">
	<div class="container">
		<h3 class="section-title">إقتراحتنا لك</h3>
		<ul class="moviesGrid">
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Maze Runner
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Breaking Bad
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Peaky Blinders
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Good Doctor
					</span>
				</a>
			</li>
		</ul>
	</div>
</section>
<section class="section movies slider has-arrows is-trending">
	<div class="container">
		<h3 class="section-title">الأكثر مشاهدة</h3>
		<ul class="moviesGrid">
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Breaking Bad
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Peaky Blinders
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Good Doctor
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Maze Runner
					</span>
				</a>
			</li>
		</ul>
	</div>
</section>
<section class="section movies slider has-arrows is-series">
	<div class="container">
		<h3 class="section-title">أحدث المسلسلات</h3>
		<ul class="moviesGrid">
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg" />
					<span class="movie-description">
						The Maze Runner
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg" />
					<span class="movie-description">
						Breaking Bad
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg" />
					<span class="movie-description">
						Peaky Blinders
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg" />
					<span class="movie-description">
						The Good Doctor
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg" />
					<span class="movie-description">
						The Maze Runner
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg" />
					<span class="movie-description">
						Breaking Bad
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg" />
					<span class="movie-description">
						Peaky Blinders
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg" />
					<span class="movie-description">
						The Good Doctor
						<span class="play-icon"><i class="fas fa-play"></i></span>
					</span>
				</a>
			</li>
		</ul>
	</div>
</section>
<section class="section movies slider has-arrows is-movies">
	<div class="container">
		<h3 class="section-title">أحدث الأفلام</h3>
		<ul class="moviesGrid">
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Peaky Blinders
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Good Doctor
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Maze Runner
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Breaking Bad
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Breaking Bad
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Peaky Blinders
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Good Doctor
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Maze Runner
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Peaky Blinders
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Good Doctor
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Maze Runner
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Breaking Bad
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/q1i8QHiHZ1cukG5iOxai8pydmoa.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Breaking Bad
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						Peaky Blinders
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/lemqKtcCuAano5aqrzxYiKC8kkn.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Good Doctor
					</span>
				</a>
			</li>
			<li class="movie">
				<a href="#/details">
					<img src="https://image.tmdb.org/t/p/w300/4onX7UF2MPUgIpkUerLC3dpVfNZ.jpg" />
					<span class="movie-description">
						<span class="play-icon"><i class="fas fa-play"></i></span>
						The Maze Runner
					</span>
				</a>
			</li>
		</ul>
	</div>
</section>`;
}
export default Shows;