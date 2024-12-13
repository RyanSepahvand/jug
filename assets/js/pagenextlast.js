const pagination = document.getElementById('pagination');
        const totalPages = 10;
        let currentPage = 1;

        // Render the pagination buttons
        function renderPagination() {
            pagination.innerHTML = '';

            // Last page button
            const prevButton = document.createElement('button');
            prevButton.textContent = 'قبلی';
            prevButton.disabled = currentPage === 1;
            prevButton.addEventListener('click', () => changePage(currentPage - 1));
            pagination.appendChild(prevButton);

            // Ellipsis for overflow on the left
            if (currentPage > 3) {
                const ellipsisStart = document.createElement('span');
                ellipsisStart.textContent = '...';
                pagination.appendChild(ellipsisStart);
            }

            // Numbered buttons
            for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
                const pageButton = document.createElement('button');
                pageButton.textContent = i;
                if (i === currentPage) {
                    pageButton.classList.add('active');
                }
                pageButton.addEventListener('click', () => changePage(i));
                pagination.appendChild(pageButton);
            }

            // Ellipsis for overflow on the right
            if (currentPage < totalPages - 2) {
                const ellipsisEnd = document.createElement('span');
                ellipsisEnd.textContent = '...';
                pagination.appendChild(ellipsisEnd);
            }

            // Next page button
            const nextButton = document.createElement('button');
            nextButton.textContent = 'بعدی';
            nextButton.disabled = currentPage === totalPages;
            nextButton.addEventListener('click', () => changePage(currentPage + 1));
            pagination.appendChild(nextButton);
        }

        // Change the current page and re-render
        function changePage(page) {
            if (page >= 1 && page <= totalPages) {
                currentPage = page;
                renderPagination();
            }
        }

        // Initial render
        renderPagination();